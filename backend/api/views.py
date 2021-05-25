from api.models import Customer
from api.serializers import CustomerSerializer
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def randomize_customer(request):
    """s
    POST
    /randomize-customer/
    sets priority of a random customer to the highest
    """
    if request.method == 'POST':
        obj = Customer.objects.random()
        obj.set_highest()
        ser = CustomerSerializer(obj)
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
    ordering = ['priority']
    http_method_names = [
        'get',
        'put',
        'post',
        'patch',
        'delete'
    ]

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        return queryset.order_by('priority')
