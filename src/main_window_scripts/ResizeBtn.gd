extends TextureButton
var defaultSize := Vector2(1024, 600)
var minSize := Vector2(1024, 600)
var mouseLocalPos : Vector2
var dragEnabled := bool(false)

func _process(_delta):
	if dragEnabled:
		resizeWindow()

func resizeWindow() -> void:
	var newSize: Vector2
	newSize = Vector2(get_global_mouse_position()) + mouseLocalPos #FIXEME: Weird offset when clicking onresize button. Hurts ability to doubleckic to resize window size
	DisplayServer.window_set_size(Vector2(max(newSize.x, minSize.x), max(newSize.y, minSize.y)))

func onInput(event):
	if event is InputEventMouseButton:
		if event.button_index == 1 && event.pressed && !event.double_click:
			dragEnabled = true
			mouseLocalPos = Vector2(get_local_mouse_position())
		elif event.button_index == 1 && event.pressed && event.double_click:
			DisplayServer.window_set_size(defaultSize)
		elif event.button_index == 1 and event.pressed == false:
			dragEnabled = false
