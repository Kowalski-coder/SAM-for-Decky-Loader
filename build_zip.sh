#!/usr/bin/env bash
set -e

PLUGIN_NAME="SAM"
ZIP_NAME="${PLUGIN_NAME}.zip"

echo "🔨 Сборка фронтенда..."
pnpm run build

echo "📦 Формирование структуры релиза..."
rm -rf /tmp/${PLUGIN_NAME} ${ZIP_NAME}
mkdir -p /tmp/${PLUGIN_NAME}/dist
mkdir -p /tmp/${PLUGIN_NAME}/bin

# Копирование обязательных файлов
cp plugin.json /tmp/${PLUGIN_NAME}/
cp package.json /tmp/${PLUGIN_NAME}/
cp main.py /tmp/${PLUGIN_NAME}/
cp dist/index.js /tmp/${PLUGIN_NAME}/dist/
cp bin/samrewritten /tmp/${PLUGIN_NAME}/bin/
chmod +x /tmp/${PLUGIN_NAME}/bin/samrewritten

[ -d assets ] && cp -r assets /tmp/${PLUGIN_NAME}/

echo "🗜️ Создание ZIP-архива..."
cd /tmp
zip -r "${ZIP_NAME}" "${PLUGIN_NAME}" -x "*.git*" "*node_modules*"
cd -
mv /tmp/${ZIP_NAME} ./

# Создаем также совместимый алиас SAMDeck.zip на случай старых путей
cp "${ZIP_NAME}" "SAMDeck.zip"

echo "✅ Релизный архив плагина готов: ${ZIP_NAME} (версия 1.0.0)"
sha256sum "${ZIP_NAME}"
