# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2271<sub>(+52) | 2550<sub>(-50) | 2738<sub>(+69) |  |
| 7.0.3 | 2026-10-29 | 2219 | 2600 | 2669 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2361<sub>(+63) | 2719<sub>(+91) | 2743<sub>(+69) |  |
| 7.0.3 | 2026-10-29 | 2298 | 2628 | 2674 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2298 | 2628 | 2674 |  |
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

Generated: 2026-11-06 05:36:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2800
  line "E1: STC (8.0+0.08s)" [2219, 2271]
  line "E1: LTC (60.0+0.60s)" [2600, 2550]
  line "E1: VLTC (2m24s+1.12s)" [2669, 2738]
  line "P1: STC (8.0+0.08s)" [2298, 2361]
  line "P1: LTC (60.0+0.60s)" [2628, 2719]
  line "P1: VLTC (2m24s+1.12s)" [2674, 2743]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2743 | 57 | 100 | 54% | 2703 | 33% |
|  |  | E1 | 2738 | 49 | 140 | 54% | 2700 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2719 | 73 | 56 | 51% | 2712 | 41% |
|  |  | E1 | 2550 | 52 | 128 | 52% | 2529 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2271 | 51 | 124 | 54% | 2230 | 31% |
|  |  | P1 | 2361 | 68 | 70 | 52% | 2342 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2674 | 50 | 140 | 58% | 2576 | 32% |
|  |  | E1 | 2669 | 40 | 220 | 53% | 2623 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2628 | 51 | 148 | 58% | 2471 | 24% |
|  |  | E1 | 2600 | 32 | 348 | 57% | 2508 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2298 | 50 | 156 | 58% | 2168 | 24% |
|  |  | E1 | 2219 | 42 | 208 | 54% | 2159 | 20% |