# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2199<sub>(+16) | 2499<sub>(-39) | 2630<sub>(+15) |  |
| 7.0.3 | 2026-10-29 | 2183 | 2538 | 2615 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2178<sub>(+36) | 2472<sub>(+33) | 2534<sub>(+54) |  |
| 7.0.3 | 2026-10-29 | 2142 | 2439 | 2480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2142 | 2439 | 2480 |  |
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

Generated: 2026-11-14 05:36:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2183, 2199]
  line "E1: LTC (60.0+0.60s)" [2538, 2499]
  line "E1: VLTC (2m24s+1.12s)" [2615, 2630]
  line "P1: STC (8.0+0.08s)" [2142, 2178]
  line "P1: LTC (60.0+0.60s)" [2439, 2472]
  line "P1: VLTC (2m24s+1.12s)" [2480, 2534]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2534 | 46 | 160 | 50% | 2537 | 28% |
|  |  | E1 | 2630 | 34 | 300 | 49% | 2635 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2472 | 41 | 196 | 48% | 2487 | 32% |
|  |  | E1 | 2499 | 37 | 248 | 52% | 2479 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2178 | 46 | 156 | 48% | 2203 | 29% |
|  |  | E1 | 2199 | 36 | 260 | 51% | 2184 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2480 | 49 | 144 | 58% | 2390 | 31% |
|  |  | E1 | 2615 | 38 | 240 | 52% | 2579 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2439 | 50 | 152 | 59% | 2294 | 25% |
|  |  | E1 | 2538 | 31 | 376 | 57% | 2441 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2142 | 46 | 176 | 57% | 2043 | 26% |
|  |  | E1 | 2183 | 41 | 222 | 55% | 2114 | 19% |