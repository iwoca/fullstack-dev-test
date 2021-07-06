from django.core.exceptions import ObjectDoesNotExist
from django.http.response import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views import View

from .models import Seller

class SellerById(View):
    def get(self, request, seller_id):
        try:
            seller = Seller.objects.get(id=seller_id)

            return JsonResponse({
                'id': seller.id,
                'name': seller.name,
                'handle': seller.handle
            })
        except ObjectDoesNotExist:
            return JsonResponse(status=404, data={ 'error': 'seller not found' })

    def put(self, request, seller_id):
        return JsonResponse(status=501, data={ 'error': 'not implemented'})


class SellerByHandle(View):
    def get(self, request, seller_handle):
        try:
            seller = Seller.objects.get(handle=seller_handle)

            return JsonResponse({
                'id': seller.id,
                'name': seller.name,
                'handle': seller.handle
            })
        except ObjectDoesNotExist:
            return JsonResponse(status=404, data={ 'error': 'seller not found' })
