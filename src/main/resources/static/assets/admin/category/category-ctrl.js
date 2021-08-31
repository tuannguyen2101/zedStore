app.controller("category-ctrl", function ($scope, $http) {
    $scope.items = [];
    $scope.form = {};

    $scope.initialize = () => {
        // load categories
        $http.get("/rest/categories").then((resp) => {
            $scope.items = resp.data;
            console.log("Items", $scope.items);
        });
    };

    // khởi đầu
    $scope.initialize();

    //Xóa form
    $scope.reset = () => {
        $scope.form = {};
    };

    // Hiển thị lên form
    $scope.edit = (item) => {
        $scope.form = angular.copy(item);
        $(".nav-tabs a:eq(0)").tab("show");
    };

    //Thêm mới danh mục
    $scope.create = () => {
        var item = angular.copy($scope.form);
        $http
            .post(`/rest/categories`, item)
            .then((resp) => {
                $scope.items.push(resp.data);
                alert("Thêm sản phẩm mới thành công!");
            })
            .catch((error) => {
                alert("Thêm sản phẩm mới thất bại!");
                console.log("Eror", error);
            });
    };

    // Cập nhật danh mục
    $scope.update = () => {
        var item = angular.copy($scope.form);
        $http
            .put(`/rest/categories/${item.id}`, item)
            .then(() => {
                var index = $scope.items.findIndex((cate) => cate.id == item.id);
                $scope.items[index] = item;
                alert("Cập nhật thành công!");
            })
            .catch((error) => {
                alert("Lỗi cập nhật danh mục!");
                console.log("Error", error);
            });
    };

    // Xóa danh mục
    $scope.delete = (item) => {
        $http
            .delete(`/rest/categories/${item.id}`)
            .then(() => {
                var index = $scope.items.findIndex((cate) => cate.id == item.id);
                $scope.items.splice(index, 1);
                $scope.reset();
                alert("Xóa thành công!");
            })
            .catch((error) => {
                alert("Lỗi xóa danh mục!");
                console.log("Error", error);
            });
    };

    $scope.pager = {
        page: 0,
        size: 10,
        get items() {
            var start = this.page * this.size;
            return $scope.items.slice(start, start + this.size);
        },
        get count() {
            return Math.ceil((1.0 * $scope.items.length) / this.size);
        },
        first() {
            this.page = 0;
        },
        prev() {
            this.page--;
            if (this.page < 0) {
                this.first();
            }
        },
        next() {
            this.page++;
            if (this.page >= this.count) {
                this.last();
            }
        },
        last() {
            this.page = this.count - 1;
        },
    };
});
