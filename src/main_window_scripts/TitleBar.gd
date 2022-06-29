extends Control

var dragEnabled: bool = false
var mouseLocalPos: Vector2i

func _process(_delta):
	if dragEnabled:
		moveWindow()

func moveWindow() -> void:
	var newPos: Vector2
	newPos = DisplayServer.window_get_position() + Vector2i(get_global_mouse_position()) - mouseLocalPos
	DisplayServer.window_set_position(newPos)

func dragHitboxMouseInput(event):
	if event is InputEventMouseButton:
		if event.button_index == 1 and event.pressed == true:
			dragEnabled = true
			mouseLocalPos = Vector2i(get_local_mouse_position())
		elif event.button_index == 1 and event.pressed == false:
			dragEnabled = false
