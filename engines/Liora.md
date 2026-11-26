# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2080<sub>(-33) | 2429<sub>(+38) | 2541<sub>(+49) |  |
| 11.0 | 2026-10-29 | 2113 | 2391 | 2492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2190<sub>(+75) | 2407<sub>(+74) | 2489<sub>(+160) |  |
| 11.0 | 2026-10-29 | 2115 | 2333 | 2329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-29 | 2115 | 2333 | 2329 |  |
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

Generated: 2026-11-26 05:40:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2113, 2080]
  line "E1: LTC (60.0+0.60s)" [2391, 2429]
  line "E1: VLTC (2m24s+1.12s)" [2492, 2541]
  line "P1: STC (8.0+0.08s)" [2115, 2190]
  line "P1: LTC (60.0+0.60s)" [2333, 2407]
  line "P1: VLTC (2m24s+1.12s)" [2329, 2489]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2489 | 51 | 128 | 51% | 2473 | 30% |
|  |  | E1 | 2541 | 40 | 228 | 52% | 2514 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2407 | 60 | 94 | 56% | 2345 | 29% |
|  |  | E1 | 2429 | 41 | 216 | 51% | 2417 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2190 | 52 | 132 | 52% | 2167 | 20% |
|  |  | E1 | 2080 | 46 | 162 | 50% | 2078 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2492 | 45 | 180 | 50% | 2492 | 18% |
|  |  | P1 | 2329 | 99 | 36 | 47% | 2354 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2391 | 36 | 284 | 45% | 2449 | 15% |
|  |  | P1 | 2333 | 63 | 94 | 49% | 2337 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2115 | 53 | 132 | 49% | 2122 | 15% |
|  |  | E1 | 2113 | 33 | 354 | 55% | 2057 | 15% |