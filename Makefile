OUTPUT=./dist/questions
TARGET=./questions/*.md 


default: main
	-@echo "=================="
	-@echo "  Build Success!  "
	-@echo "=================="

pre-build:
	mkdir -p $(OUTPUT)

build:
	emanual-interview jsonify --output $(OUTPUT) $(TARGET)

main: pre-build build

.PHONY: pre-build build main
