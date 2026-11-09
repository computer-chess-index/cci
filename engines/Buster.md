# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2226<sub>(+20) | 2539<sub>(-44) | 2696<sub>(+43) |  |
| 7.0.3 | 2026-10-29 | 2206 | 2583 | 2653 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2302<sub>(+54) | 2622<sub>(+42) | 2699<sub>(+75) |  |
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

Generated: 2026-11-09 05:36:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2700
  line "E1: STC (8.0+0.08s)" [2206, 2226]
  line "E1: LTC (60.0+0.60s)" [2583, 2539]
  line "E1: VLTC (2m24s+1.12s)" [2653, 2696]
  line "P1: STC (8.0+0.08s)" [2248, 2302]
  line "P1: LTC (60.0+0.60s)" [2580, 2622]
  line "P1: VLTC (2m24s+1.12s)" [2624, 2699]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2699 | 47 | 152 | 53% | 2669 | 29% |
|  |  | E1 | 2696 | 36 | 254 | 51% | 2681 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2622 | 43 | 172 | 47% | 2655 | 34% |
|  |  | E1 | 2539 | 40 | 208 | 53% | 2510 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2302 | 51 | 128 | 49% | 2321 | 30% |
|  |  | E1 | 2226 | 39 | 224 | 50% | 2228 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2624 | 50 | 140 | 58% | 2526 | 32% |
|  |  | E1 | 2653 | 40 | 220 | 53% | 2608 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2580 | 51 | 148 | 58% | 2422 | 24% |
|  |  | E1 | 2583 | 32 | 348 | 57% | 2492 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2248 | 50 | 156 | 58% | 2120 | 24% |
|  |  | E1 | 2206 | 42 | 208 | 54% | 2145 | 20% |