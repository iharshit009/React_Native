from django.shortcuts import render
from .models import Product, Appointment
from .serializers import ProductSerializer, AppointmentSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny

# Create your views here.
class ProductList(ListCreateAPIView):
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer 
    permission_classes = [AllowAny]


class PetFoodList(ListCreateAPIView):
    queryset = Product.objects.filter(category='healthcare')
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class PetMedicineList(ListCreateAPIView):
    queryset = Product.objects.filter(category='medicine')
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class PetParlourList(ListCreateAPIView):
    queryset = Product.objects.filter(category='parlour')
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class PetAccessoriesList(ListCreateAPIView):
    queryset = Product.objects.filter(category='accessories')
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class AppointmentList(ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]




