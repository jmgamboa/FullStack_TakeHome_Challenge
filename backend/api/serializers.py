from rest_framework import serializers
from api.models import Customer

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = '__all__'


class SetHighestPrioritySerializer(CustomerSerializer):

    def update(self, instance, validated_data):
        instance.priority = Customer.HIGHEST
        return instance