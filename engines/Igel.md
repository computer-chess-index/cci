# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3290<sub>(+105) | 3486<sub>(+72) | 3530<sub>(+65) |  |
| 3.6.0 | 2024-12-28 | 3185<sub>(+17) | 3414<sub>(+4) | 3465<sub>(+18) |  |
| 3.5.0 | 2023-06-22 | 3168 | 3410 | 3447 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Igel+<version>&body=###%20Engine%20name%0AIgel%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:38:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3168, 3185, 3290]
  line "STC (8.0+0.08s)" [3168, 3185, 3290]
  line "LTC (60.0+0.60s)" [3410, 3414, 3486]
  line "" [3447, 3465, 3530]
  line "VLTC (2m24s+1.12s)" [3447, 3465, 3530]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 29 | 266 | 51% | 3522 | 87% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 31 | 248 | 49% | 3491 | 81% |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3290 | 32 | 240 | 50% | 3291 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3465 | 12 | 1674 | 50% | 3468 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3414 | 12 | 1616 | 50% | 3411 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3185 | 12 | 1708 | 49% | 3193 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 17 | 800 | 50% | 3444 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 17 | 828 | 49% | 3413 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3168 | 18 | 872 | 52% | 3129 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |