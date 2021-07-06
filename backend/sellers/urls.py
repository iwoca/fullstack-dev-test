from django.urls import path

from . import views

urlpatterns = [
    path('handle/<str:seller_handle>/', views.SellerByHandle.as_view(), name='get_seller_by_handle'),
    path('<int:seller_id>/', views.SellerById.as_view(), name='seller_by_id'),
]
