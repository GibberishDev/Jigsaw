extends TextureButton

var originalSize: Vector2
var originalPos: Vector2

func onPress():
	if DisplayServer.window_get_mode() != DisplayServer.WINDOW_MODE_FULLSCREEN:
		originalSize = DisplayServer.window_get_size()
		originalPos = DisplayServer.window_get_position()
		var TW = create_tween()
		TW.tween_method(changeSize.bind(), originalSize, Vector2(0, 0), 0.5).set_trans(Tween.TRANS_EXPO)
		TW.parallel().tween_method(changePos.bind(), originalPos, Vector2(DisplayServer.screen_get_size().x/2.0,DisplayServer.screen_get_size().y), 0.5).set_trans(Tween.TRANS_EXPO)
		await TW.finished
		DisplayServer.window_set_size(originalSize)
		DisplayServer.window_set_position(originalPos)
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_MINIMIZED)
	else:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_MINIMIZED)

func changeSize(winSize):
	DisplayServer.window_set_size(winSize)

func changePos(winPos):
	DisplayServer.window_set_position(winPos)
