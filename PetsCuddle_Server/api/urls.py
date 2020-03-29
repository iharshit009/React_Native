from django.urls import path
from .views import (ProductList, PetFoodList, 
                   PetMedicineList, PetParlourList, 
                   PetAccessoriesList, AppointmentList)

urlpatterns = [
    path('products/', ProductList.as_view(), name='products-list'),
    path('products/petfood', PetFoodList.as_view(), name='pet-food'),
    path('products/petmedicine', PetMedicineList.as_view(), name='pet-medicine'),
    path('products/petparlour', PetParlourList.as_view(), name='pet-parlour'),
    path('products/petaccessories', PetAccessoriesList.as_view(), name='pet-accessories'),
    path('appointment/', AppointmentList.as_view(), name='appointment'),
]
