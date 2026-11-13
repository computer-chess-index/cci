# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2196<sub>(+14) | 2484<sub>(-46) | 2623<sub>(+24) |  |
| 7.0.3 | 2026-10-29 | 2182 | 2530 | 2599 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2184<sub>(+37) | 2480<sub>(+34) | 2553<sub>(+66) |  |
| 7.0.3 | 2026-10-29 | 2147 | 2446 | 2487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2147 | 2446 | 2487 |  |
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

Generated: 2026-11-13 05:36:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2182, 2196]
  line "E1: LTC (60.0+0.60s)" [2530, 2484]
  line "E1: VLTC (2m24s+1.12s)" [2599, 2623]
  line "P1: STC (8.0+0.08s)" [2147, 2184]
  line "P1: LTC (60.0+0.60s)" [2446, 2480]
  line "P1: VLTC (2m24s+1.12s)" [2487, 2553]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2553 | 46 | 156 | 51% | 2539 | 28% |
|  |  | E1 | 2623 | 34 | 294 | 49% | 2620 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2480 | 42 | 192 | 47% | 2495 | 31% |
|  |  | E1 | 2484 | 37 | 248 | 52% | 2464 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2184 | 46 | 156 | 48% | 2210 | 29% |
|  |  | E1 | 2196 | 37 | 256 | 51% | 2179 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2599 | 39 | 232 | 53% | 2558 | 25% |
|  |  | P1 | 2487 | 49 | 140 | 58% | 2394 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2530 | 31 | 364 | 58% | 2425 | 27% |
|  |  | P1 | 2446 | 50 | 152 | 59% | 2302 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2182 | 42 | 214 | 55% | 2106 | 19% |
|  |  | P1 | 2147 | 48 | 164 | 58% | 2028 | 26% |