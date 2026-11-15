# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1272<sub>(+130) | 1465<sub>(+65) | 1501<sub>(+55) |  |
| 0.0.4 | 2025-11-23 | 1142 | 1400 | 1446 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1208<sub>(+71) | 1411<sub>(+106) | 1473<sub>(+128) |  |
| 0.0.4 | 2025-11-23 | 1137 | 1305 | 1345 |  |
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

Generated: 2026-11-15 05:40:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1600
  line "E1: STC (8.0+0.08s)" [1142, 1272]
  line "E1: LTC (60.0+0.60s)" [1400, 1465]
  line "E1: VLTC (2m24s+1.12s)" [1446, 1501]
  line "P1: STC (8.0+0.08s)" [1137, 1208]
  line "P1: LTC (60.0+0.60s)" [1305, 1411]
  line "P1: VLTC (2m24s+1.12s)" [1345, 1473]
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
|  |  | P1 | 1473 | 41 | 188 | 49% | 1482 | 34% |
|  |  | E1 | 1501 | 33 | 320 | 48% | 1536 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  |  | P1 | 1411 | 46 | 168 | 46% | 1509 | 30% |
|  |  | E1 | 1465 | 33 | 316 | 47% | 1543 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1208 | 38 | 214 | 50% | 1206 | 37% |
|  |  | E1 | 1272 | 30 | 386 | 51% | 1269 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1446 | 67 | 90 | 32% | 1751 | 31% |
|  |  | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  |  | P1 | 1345 | 80 | 70 | 34% | 1635 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1400 | 64 | 100 | 32% | 1751 | 29% |
|  |  | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1305 | 77 | 72 | 35% | 1550 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |
|  |  | P1 | 1137 | 88 | 64 | 25% | 1665 | 22% |
|  |  | E1 | 1142 | 59 | 112 | 40% | 1392 | 29% |