from packs.models import pack
from rest_framework import viewsets, permissions
from .serializers import PackSerializer

# pack Viewset


class PackViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PackSerializer

    def get_queryset(self):
        return self.request.user.packs.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
