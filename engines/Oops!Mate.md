# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1262<sub>(+127) | 1450<sub>(+49) | 1489<sub>(+71) |  |
| 0.0.4 | 2025-11-23 | 1135 | 1401 | 1418 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1215<sub>(+128) | 1397<sub>(+56) | 1473<sub>(+139) |  |
| 0.0.4 | 2025-11-23 | 1087 | 1341 | 1334 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1278<sub>(+137) | 1459<sub>(+93) | 1499<sub>(+83) |  |
| 0.0.4 | 2025-11-23 | 1141 | 1366 | 1416 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Oops!Mate+<version>&body=###%20Engine%20name%0AOops!Mate%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-19 05:41:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1000 --> 1500
  line "E1: STC (8.0+0.08s)" [1135, 1262]
  line "E1: LTC (60.0+0.60s)" [1401, 1450]
  line "E1: VLTC (2m24s+1.12s)" [1418, 1489]
  line "P1: STC (8.0+0.08s)" [1087, 1215]
  line "P1: LTC (60.0+0.60s)" [1341, 1397]
  line "P1: VLTC (2m24s+1.12s)" [1334, 1473]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "T1: STC (8.0+0.08s)" [1141, 1278]
  line "T1: LTC (60.0+0.60s)" [1366, 1459]
  line "T1: VLTC (2m24s+1.12s)" [1416, 1499]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1499 | 27 | 468 | 54% | 1459 | 30% |
|  |  | P1 | 1473 | 42 | 188 | 49% | 1482 | 34% |
|  |  | E1 | 1489 | 32 | 340 | 49% | 1520 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  |  | P1 | 1397 | 43 | 184 | 44% | 1509 | 31% |
|  |  | E1 | 1450 | 32 | 332 | 47% | 1526 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1215 | 38 | 220 | 51% | 1207 | 38% |
|  |  | E1 | 1262 | 30 | 394 | 51% | 1256 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  |  | P1 | 1334 | 69 | 86 | 36% | 1580 | 23% |
|  |  | E1 | 1418 | 57 | 114 | 35% | 1677 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1341 | 64 | 96 | 42% | 1494 | 22% |
|  |  | E1 | 1401 | 54 | 128 | 37% | 1665 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1087 | 73 | 84 | 27% | 1544 | 25% |
|  |  | E1 | 1135 | 53 | 136 | 42% | 1341 | 29% |
|  |  | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |