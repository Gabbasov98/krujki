function shopStatChart() {
    var options = {
        chart: {
            height: '100%',
            type: "line",
            stacked: false,
            fontFamily: 'Nunito Sans, sans-serif',
            foreColor: '#263238',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FF8A35", "#6B53FD", "#51B1A6"],
        series: [{
                name: "Series A",
                data: [50, 30, 40, 100, 150, 20, 35, 44, 90, 100, 10, 30, 40, 20, 67, 40, 150, 90, 90]
            },
            {
                name: "Series B",
                data: [100, 200, 70, 40, 120, 20, 35, 24, 90, 100, 10, 30, 40, 110, 67, 40, 150, 20, 90]
            },
            {
                name: "Series C",
                data: [100, 10, 70, 40, 20, 120, 30, 124, 190, 100, 10, 230, 140, 110, 67, 40, 150, 20, 90]
            }
        ],
        stroke: {
            width: [6, 6, 6]
        },
        xaxis: {
            categories: ['09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', ],
            labels: {
                minHeight: 100,
                rotate: -90,
                rotateAlways: true,
                position: "bottom",
                tickPlacement: 'on',
                style: {
                    colors: [],
                    fontSize: '16px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                },

            }
        },
        yaxis: [{
                title: {
                    style: {
                        color: "#FF1654"
                    }
                },
                labels: {
                    // show: false,
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 400,
                    },
                }
            },


        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#shopChart"), options);

    chart.render();
}

function brandStatChart() {
    var options = {
        chart: {
            height: '100%',
            type: "line",
            stacked: false,
            fontFamily: 'Nunito Sans, sans-serif',
            foreColor: '#263238',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FF8A35", "#6B53FD"],
        series: [{
                name: "Series A",
                data: [50, 30, 40, 100, 150, 20, 35, 44, 90, 100, 10, 30, 40, 20, 67, 40, 150, 90, 90]
            },
            {
                name: "Series B",
                data: [100, 200, 70, 40, 120, 20, 35, 24, 90, 100, 10, 30, 40, 110, 67, 40, 150, 20, 90]
            },
        ],
        stroke: {
            width: [6, 6]
        },
        xaxis: {
            categories: ['09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', ],
            labels: {
                minHeight: 100,
                rotate: -90,
                rotateAlways: true,
                position: "bottom",
                tickPlacement: 'on',
                style: {
                    colors: [],
                    fontSize: '16px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                },

            }
        },
        yaxis: [{
                title: {
                    style: {
                        color: "#FF1654"
                    }
                },
                labels: {
                    // show: false,
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 400,
                    },
                }
            },


        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#brandChart"), options);

    chart.render();
}

function brandStatChart2() {
    var options = {
        chart: {
            height: '100%',
            type: "line",
            stacked: false,
            fontFamily: 'Nunito Sans, sans-serif',
            foreColor: '#263238',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FF8A35", "#6B53FD", "#51B1A6"],
        series: [{
                name: "Series A",
                data: [50, 30, 40, 100, 150, 20, 35, 44, 90, 100, 10, 30, 40, 20, 67, 40, 150, 90, 90]
            },
            {
                name: "Series B",
                data: [100, 200, 70, 40, 120, 20, 35, 24, 90, 100, 10, 30, 40, 110, 67, 40, 150, 20, 90]
            },
            {
                name: "Series C",
                data: [100, 10, 70, 40, 20, 120, 30, 124, 190, 100, 10, 230, 140, 110, 67, 40, 150, 20, 90]
            }
        ],
        stroke: {
            width: [6, 6, 6]
        },
        xaxis: {
            categories: ['09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', '09.08.2021', ],
            labels: {
                minHeight: 100,
                rotate: -90,
                rotateAlways: true,
                position: "bottom",
                tickPlacement: 'on',
                style: {
                    colors: [],
                    fontSize: '16px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                },

            }
        },
        yaxis: [{
                title: {
                    style: {
                        color: "#FF1654"
                    }
                },
                labels: {
                    // show: false,
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 400,
                    },
                }
            },


        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#brandChart2"), options);

    chart.render();
}



$(document).ready(function() {
    $(".custom-select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-99-99', { placeholder: '+7 (___) ___ - __ - __' });
    cartCalc()

    var tag1 = document.querySelector("#tag");
    var tag2 = document.querySelector("#tag2");

    new Tagify(tag1);
    new Tagify(tag2);

    // var input = document.querySelector('input[name=tags]')

    tagify = new Tagify(input);

    if (document.getElementById("shopChart")) {
        shopStatChart()
    }
    if (document.getElementById("brandChart")) {
        brandStatChart()
    }
    if (document.getElementById("brandChart2")) {
        brandStatChart2()
    }

    $(".recipe-card__more").click(function() {
        console.log("sd")
        $(this).parents(".recipe-card").addClass("recipe-card--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".recipe-card__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.parents(".recipe-card").removeClass("recipe-card--active"); // скрываем его
        }
    });

    $(".profile-sidebar__close").click(function() {
        if ($(this).hasClass("profile-sidebar__close--active")) {
            $(this).removeClass("profile-sidebar__close--active")
            $(".profile-sidebar").hide()
            $(".profile-sidebar-bg").hide()
        } else {
            $(this).addClass("profile-sidebar__close--active")
            $(".profile-sidebar").show()
            $(".profile-sidebar-bg").show()
        }

    })

    $(".profile-sidebar-bg").click(function() {
        $(this).hide()
        $(".profile-sidebar").hide()
        $(".profile-sidebar__close").removeClass("profile-sidebar__close--active")
    })

    $(".modal-city__no").click(function() {
        $("#cityModal").modal('hide');
        $("#cityModal2").modal('show');
    })


    $(".cart__item-change").click(function() {
        if ($(this).parents(".cart-shop-card__item-show").hasClass("cart-shop-card__item-show--active")) {
            $(this).parents(".cart-shop-card__item-show").removeClass("cart-shop-card__item-show--active")
        } else {
            $(".cart-shop-card__item-show").removeClass("cart-shop-card__item-show--active")
            $(this).parents(".cart-shop-card__item-show").addClass("cart-shop-card__item-show--active")
        }
    })

    $(".cart-shop-card__open").click(function() {
        if ($(this).parents(".cart-shop-card__show").hasClass("cart-shop-card__show--active")) {
            $(this).parents(".cart-shop-card__show").removeClass("cart-shop-card__show--active")
        } else {
            $(".cart-shop-card__show").removeClass("cart-shop-card__show--active")
            $(this).parents(".cart-shop-card__show").addClass("cart-shop-card__show--active")
        }
    })








    $(".preference-show").click(function() {
        if ($(this).hasClass("preference-show--active")) {
            $(this).removeClass("preference-show--active");
        } else {
            $(".preference-show").removeClass("preference-show--active");
            $(this).addClass("preference-show--active");
        }
    })

    $(`input[data-check='select-all-preferences']`).change(function() {
        let inputVal = $(this).prop("checked")
        $(this).parents(".preference-hidden").find("input").prop("checked", inputVal)
    })

    $(`.preference-hidden input`).change(function() {
        let inputVal = $(this).prop("checked")
        if (!inputVal) {
            $(this).parents(".preference-hidden").find("input[data-check='select-all-preferences']").prop("checked", false)
        }
    })

    $('.pincode input').keydown(function(e) {
        $(this).val('');
    });

    $('.pincode input').keyup(function(e) {
        var $wrap = $(this).closest('.pincode');
        var $inputs = $wrap.find('input[type="number"]');
        var val = $(this).val();

        // Ввод только цифр
        if (val == val.replace(/[0-9]/, '')) {
            $(this).val('');
            return false;
        }

        // Передача фокуса следующему innput
        $inputs.eq($inputs.index(this) + 1).focus();

        // Заполнение input hidden
        var fullval = '';
        $inputs.each(function() {
            fullval = fullval + (parseInt($(this).val()) || '0');
        });
        $wrap.find('input[type="hidden"]').val(fullval);
    });

    $(".reg4__pincode-remove").click(function() {
        $(this).parents(".reg4__pincode").children("input").val('');
    })


    $("input[type=date]").val();
})


function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(".ccalc-minus").addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(".ccalc-minus").removeClass("disabled");
    });
}