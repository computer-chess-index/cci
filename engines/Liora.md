# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2080<sub>(-35) | 2431<sub>(+40) | 2541<sub>(+49) |  |
| 11.0 | 2026-10-29 | 2115 | 2391 | 2492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2190<sub>(+73) | 2407<sub>(+76) | 2491<sub>(+83) |  |
| 11.0 | 2026-10-29 | 2117 | 2331 | 2408 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-29 | 2117 | 2331 | 2408 |  |
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

Generated: 2026-11-27 05:39:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2115, 2080]
  line "E1: LTC (60.0+0.60s)" [2391, 2431]
  line "E1: VLTC (2m24s+1.12s)" [2492, 2541]
  line "P1: STC (8.0+0.08s)" [2117, 2190]
  line "P1: LTC (60.0+0.60s)" [2331, 2407]
  line "P1: VLTC (2m24s+1.12s)" [2408, 2491]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2491 | 51 | 128 | 51% | 2475 | 30% |
|  |  | E1 | 2541 | 40 | 228 | 52% | 2514 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2407 | 60 | 94 | 56% | 2345 | 29% |
|  |  | E1 | 2431 | 40 | 220 | 51% | 2417 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2190 | 52 | 132 | 52% | 2168 | 20% |
|  |  | E1 | 2080 | 46 | 162 | 50% | 2078 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2492 | 45 | 180 | 50% | 2492 | 18% |
|  |  | P1 | 2408 | 85 | 48 | 55% | 2356 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2331 | 62 | 98 | 49% | 2337 | 13% |
|  |  | E1 | 2391 | 36 | 284 | 45% | 2449 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2117 | 53 | 132 | 49% | 2124 | 15% |
|  |  | E1 | 2115 | 32 | 362 | 55% | 2059 | 15% |