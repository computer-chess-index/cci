# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2236<sub>(+22) | 2541<sub>(-48) | 2701<sub>(+41) |  |
| 7.0.3 | 2026-10-29 | 2214 | 2589 | 2660 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2303<sub>(+54) | 2619<sub>(+39) | 2699<sub>(+75) |  |
| 7.0.3 | 2026-10-29 | 2249 | 2580 | 2624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2249 | 2580 | 2624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Buster+<version>&body=###%20Engine%20name%0ABuster%0A%0A###%20Version%0A7.0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:36:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2800
  line "E1: STC (8.0+0.08s)" [2214, 2236]
  line "E1: LTC (60.0+0.60s)" [2589, 2541]
  line "E1: VLTC (2m24s+1.12s)" [2660, 2701]
  line "P1: STC (8.0+0.08s)" [2249, 2303]
  line "P1: LTC (60.0+0.60s)" [2580, 2619]
  line "P1: VLTC (2m24s+1.12s)" [2624, 2699]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2701 | 36 | 262 | 51% | 2689 | 28% |
|  |  | P1 | 2699 | 47 | 152 | 53% | 2669 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2619 | 42 | 180 | 46% | 2654 | 33% |
|  |  | E1 | 2541 | 39 | 220 | 53% | 2518 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2303 | 50 | 132 | 49% | 2321 | 30% |
|  |  | E1 | 2236 | 38 | 236 | 50% | 2234 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2624 | 50 | 140 | 58% | 2526 | 32% |
|  |  | E1 | 2660 | 40 | 220 | 53% | 2615 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2580 | 51 | 148 | 58% | 2423 | 24% |
|  |  | E1 | 2589 | 32 | 348 | 57% | 2498 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2249 | 50 | 156 | 58% | 2120 | 24% |
|  |  | E1 | 2214 | 42 | 208 | 54% | 2153 | 20% |