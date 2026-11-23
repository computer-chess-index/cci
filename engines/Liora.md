# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2068<sub>(-29) | 2429<sub>(+42) | 2537<sub>(+46) |  |
| 11.0 | 2026-10-29 | 2097 | 2387 | 2491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2176<sub>(+69) | 2392<sub>(+83) | 2480<sub>(+153) |  |
| 11.0 | 2026-10-29 | 2107 | 2309 | 2327 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-29 | 2107 | 2309 | 2327 |  |
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

Generated: 2026-11-23 05:39:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2097, 2068]
  line "E1: LTC (60.0+0.60s)" [2387, 2429]
  line "E1: VLTC (2m24s+1.12s)" [2491, 2537]
  line "P1: STC (8.0+0.08s)" [2107, 2176]
  line "P1: LTC (60.0+0.60s)" [2309, 2392]
  line "P1: VLTC (2m24s+1.12s)" [2327, 2480]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2480 | 51 | 128 | 51% | 2464 | 30% |
|  |  | E1 | 2537 | 40 | 224 | 52% | 2510 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2392 | 62 | 90 | 56% | 2333 | 27% |
|  |  | E1 | 2429 | 43 | 200 | 52% | 2410 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2068 | 47 | 158 | 50% | 2072 | 22% |
|  |  | P1 | 2176 | 54 | 120 | 52% | 2159 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2327 | 115 | 28 | 50% | 2326 | 7% |
|  |  | E1 | 2491 | 46 | 172 | 50% | 2489 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2309 | 88 | 46 | 47% | 2338 | 15% |
|  |  | E1 | 2387 | 39 | 248 | 44% | 2450 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2107 | 58 | 106 | 49% | 2115 | 17% |
|  |  | E1 | 2097 | 35 | 308 | 55% | 2041 | 16% |