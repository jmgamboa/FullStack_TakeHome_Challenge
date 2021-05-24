from django.shortcuts import render
from api.models import Customer
from api.serializers import CustomerSerializer
from api.serializers import SetHighestPrioritySerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view


@api_view(['POST'])
def randomize_customer(request):
    """
    POST
    /randomize-customer/
    sets priority of a random customer to the highest
    """
    if request.method == 'POST':
        obj = Customer.objects.random()
        ser = SetHighestPrioritySerializer(instance=obj)
        if ser.is_valid(raise_exception=True):
            ser.save()
            return Response(ser.data)
    return Response({"message": "method not allowed"})


class CustomerViewSet(viewsets.ModelViewSet):
    """
    API for customers

    GET
    /customers/
    returns list of customers

    GET PATCH PUT DELETE
    /customers/{id}/

    POST
    /customers/ returns customer

    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = []
    http_method_names = [
        'get',
        'put',
        'post',
        'patch',
        'delete'
    ]
