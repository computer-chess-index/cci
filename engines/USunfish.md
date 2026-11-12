# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1098<sub>(-189) | 1470<sub>(+204) | 1562<sub>(+69) |  |
| 1.1 | 2026-05-15 | 1287 | 1266 | 1493 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1080<sub>(-898) | 1466<sub>(-339) | 1607<sub>(-344) |  |
| 1.1 | 2026-05-15 | 1978 | 1805 | 1951 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1088<sub>(+120) | 1470<sub>(+105) | 1540<sub>(+33) |  |
| 1.1 | 2026-05-15 | 968 | 1365 | 1507 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+USunfish+<version>&body=###%20Engine%20name%0AUSunfish%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:43:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 2000
  line "E1: STC (8.0+0.08s)" [1287, 1098]
  line "E1: LTC (60.0+0.60s)" [1266, 1470]
  line "E1: VLTC (2m24s+1.12s)" [1493, 1562]
  line "P1: STC (8.0+0.08s)" [1978, 1080]
  line "P1: LTC (60.0+0.60s)" [1805, 1466]
  line "P1: VLTC (2m24s+1.12s)" [1951, 1607]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 900 --> 1600
  line "T1: STC (8.0+0.08s)" [968, 1088]
  line "T1: LTC (60.0+0.60s)" [1365, 1470]
  line "T1: VLTC (2m24s+1.12s)" [1507, 1540]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1562 | 35 | 296 | 50% | 1575 | 22% |
|  |  | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  |  | P1 | 1607 | 36 | 290 | 52% | 1590 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1470 | 34 | 310 | 48% | 1484 | 20% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  |  | P1 | 1466 | 44 | 188 | 48% | 1517 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1080 | 39 | 228 | 50% | 1085 | 25% |
|  |  | E1 | 1098 | 32 | 354 | 49% | 1100 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1493 | 146 | 40 | 18% | 2005 | 5% |
|  |  | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  |  | P1 | 1951 | 196 | 24 | 33% | 2217 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1266 | 146 | 36 | 19% | 1802 | 11% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  |  | P1 | 1805 | 182 | 24 | 33% | 2076 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1978 | 243 | 16 | 0% | 2579 | 0% |
|  |  | E1 | 1287 | 176 | 40 | 11% | 1978 | 3% |