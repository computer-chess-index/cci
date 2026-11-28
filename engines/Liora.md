# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2079<sub>(-32) | 2430<sub>(+39) | 2541<sub>(+50) |  |
| 11.0 | 2026-10-29 | 2111 | 2391 | 2491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2192<sub>(+72) | 2410<sub>(+76) | 2492<sub>(+26) |  |
| 11.0 | 2026-10-29 | 2120 | 2334 | 2466 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-29 | 2120 | 2334 | 2466 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Liora+<version>&body=###%20Engine%20name%0ALiora%0A%0A###%20Version%0A11.13" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:40:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2111, 2079]
  line "E1: LTC (60.0+0.60s)" [2391, 2430]
  line "E1: VLTC (2m24s+1.12s)" [2491, 2541]
  line "P1: STC (8.0+0.08s)" [2120, 2192]
  line "P1: LTC (60.0+0.60s)" [2334, 2410]
  line "P1: VLTC (2m24s+1.12s)" [2466, 2492]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2541 | 40 | 232 | 52% | 2514 | 22% |
|  |  | P1 | 2492 | 51 | 128 | 51% | 2476 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2430 | 40 | 220 | 51% | 2415 | 21% |
|  |  | P1 | 2410 | 60 | 94 | 56% | 2348 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2192 | 52 | 132 | 52% | 2171 | 20% |
|  |  | E1 | 2079 | 45 | 174 | 50% | 2076 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2466 | 51 | 138 | 55% | 2412 | 21% |
|  |  | E1 | 2491 | 45 | 180 | 50% | 2492 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2334 | 62 | 98 | 49% | 2338 | 13% |
|  |  | E1 | 2391 | 36 | 284 | 45% | 2449 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2120 | 53 | 132 | 49% | 2126 | 15% |
|  |  | E1 | 2111 | 32 | 366 | 55% | 2059 | 14% |