from rest_framework import routers
from .api import PackViewSet

router = routers.DefaultRouter()
router.register('api/packs', PackViewSet, 'packs')

urlpatterns = router.urls
