# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2230<sub>(+20) | 2543<sub>(-46) | 2699<sub>(+41) |  |
| 7.0.3 | 2026-10-29 | 2210 | 2589 | 2658 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2311<sub>(+63) | 2622<sub>(+42) | 2696<sub>(+72) |  |
| 7.0.3 | 2026-10-29 | 2248 | 2580 | 2624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2248 | 2580 | 2624 |  |
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

Generated: 2026-11-08 05:36:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2700
  line "E1: STC (8.0+0.08s)" [2210, 2230]
  line "E1: LTC (60.0+0.60s)" [2589, 2543]
  line "E1: VLTC (2m24s+1.12s)" [2658, 2699]
  line "P1: STC (8.0+0.08s)" [2248, 2311]
  line "P1: LTC (60.0+0.60s)" [2580, 2622]
  line "P1: VLTC (2m24s+1.12s)" [2624, 2696]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2696 | 47 | 148 | 52% | 2668 | 29% |
|  |  | E1 | 2699 | 37 | 246 | 51% | 2687 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2622 | 43 | 172 | 47% | 2655 | 34% |
|  |  | E1 | 2543 | 42 | 188 | 53% | 2515 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2311 | 52 | 120 | 50% | 2322 | 31% |
|  |  | E1 | 2230 | 39 | 216 | 50% | 2233 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2658 | 40 | 220 | 53% | 2612 | 26% |
|  |  | P1 | 2624 | 50 | 140 | 58% | 2526 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2589 | 32 | 348 | 57% | 2498 | 29% |
|  |  | P1 | 2580 | 51 | 148 | 58% | 2422 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2248 | 50 | 156 | 58% | 2120 | 24% |
|  |  | E1 | 2210 | 42 | 208 | 54% | 2149 | 20% |