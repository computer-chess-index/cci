# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2188<sub>(+17) | 2496<sub>(-41) | 2620<sub>(+5) |  |
| 7.0.3 | 2026-10-29 | 2171 | 2537 | 2615 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2183<sub>(+35) | 2472<sub>(+26) | 2533<sub>(+57) |  |
| 7.0.3 | 2026-10-29 | 2148 | 2446 | 2476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2148 | 2446 | 2476 |  |
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

Generated: 2026-11-15 05:36:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2171, 2188]
  line "E1: LTC (60.0+0.60s)" [2537, 2496]
  line "E1: VLTC (2m24s+1.12s)" [2615, 2620]
  line "P1: STC (8.0+0.08s)" [2148, 2183]
  line "P1: LTC (60.0+0.60s)" [2446, 2472]
  line "P1: VLTC (2m24s+1.12s)" [2476, 2533]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2533 | 46 | 160 | 50% | 2537 | 28% |
|  |  | E1 | 2620 | 33 | 312 | 48% | 2627 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2472 | 41 | 200 | 49% | 2481 | 32% |
|  |  | E1 | 2496 | 36 | 256 | 53% | 2473 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2183 | 46 | 160 | 48% | 2207 | 29% |
|  |  | E1 | 2188 | 36 | 260 | 51% | 2172 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2615 | 38 | 252 | 53% | 2574 | 25% |
|  |  | P1 | 2476 | 47 | 156 | 56% | 2402 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2537 | 30 | 388 | 57% | 2439 | 27% |
|  |  | P1 | 2446 | 48 | 164 | 58% | 2311 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2148 | 45 | 188 | 56% | 2066 | 25% |
|  |  | E1 | 2171 | 40 | 232 | 55% | 2106 | 19% |