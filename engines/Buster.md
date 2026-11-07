# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2252<sub>(+24) | 2549<sub>(-58) | 2712<sub>(+34) |  |
| 7.0.3 | 2026-10-29 | 2228 | 2607 | 2678 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2365<sub>(+69) | 2668<sub>(+41) | 2743<sub>(+70) |  |
| 7.0.3 | 2026-10-29 | 2296 | 2627 | 2673 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2296 | 2627 | 2673 |  |
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

Generated: 2026-11-07 05:36:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2800
  line "E1: STC (8.0+0.08s)" [2228, 2252]
  line "E1: LTC (60.0+0.60s)" [2607, 2549]
  line "E1: VLTC (2m24s+1.12s)" [2678, 2712]
  line "P1: STC (8.0+0.08s)" [2296, 2365]
  line "P1: LTC (60.0+0.60s)" [2627, 2668]
  line "P1: VLTC (2m24s+1.12s)" [2673, 2743]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2743 | 48 | 144 | 52% | 2715 | 30% |
|  |  | E1 | 2712 | 38 | 238 | 50% | 2707 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2668 | 43 | 168 | 46% | 2704 | 34% |
|  |  | E1 | 2549 | 46 | 160 | 51% | 2537 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2365 | 53 | 112 | 52% | 2349 | 32% |
|  |  | E1 | 2252 | 41 | 200 | 50% | 2250 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2678 | 40 | 220 | 53% | 2633 | 26% |
|  |  | P1 | 2673 | 50 | 140 | 58% | 2574 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2607 | 32 | 348 | 57% | 2515 | 29% |
|  |  | P1 | 2627 | 51 | 148 | 58% | 2471 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2228 | 42 | 208 | 54% | 2167 | 20% |
|  |  | P1 | 2296 | 50 | 156 | 58% | 2167 | 24% |