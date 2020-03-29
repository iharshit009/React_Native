from rest_framework.serializers import ModelSerializer
from .models import Product, Appointment


class ProductSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Product


class AppointmentSerializer(ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'