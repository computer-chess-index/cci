# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2252<sub>(+23) | 2557<sub>(-47) | 2714<sub>(+38) |  |
| 7.0.3 | 2026-10-29 | 2229 | 2604 | 2676 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2303<sub>(+54) | 2619<sub>(+38) | 2700<sub>(+74) |  |
| 7.0.3 | 2026-10-29 | 2249 | 2581 | 2626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2249 | 2581 | 2626 |  |
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

Generated: 2026-11-11 05:36:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2800
  line "E1: STC (8.0+0.08s)" [2229, 2252]
  line "E1: LTC (60.0+0.60s)" [2604, 2557]
  line "E1: VLTC (2m24s+1.12s)" [2676, 2714]
  line "P1: STC (8.0+0.08s)" [2249, 2303]
  line "P1: LTC (60.0+0.60s)" [2581, 2619]
  line "P1: VLTC (2m24s+1.12s)" [2626, 2700]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2700 | 47 | 152 | 53% | 2670 | 29% |
|  |  | E1 | 2714 | 36 | 266 | 51% | 2704 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2619 | 42 | 180 | 46% | 2654 | 33% |
|  |  | E1 | 2557 | 39 | 220 | 53% | 2533 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2303 | 50 | 132 | 49% | 2322 | 30% |
|  |  | E1 | 2252 | 38 | 236 | 50% | 2250 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2626 | 50 | 140 | 58% | 2526 | 32% |
|  |  | E1 | 2676 | 40 | 220 | 53% | 2630 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2581 | 51 | 148 | 58% | 2423 | 24% |
|  |  | E1 | 2604 | 32 | 348 | 57% | 2514 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2249 | 50 | 156 | 58% | 2121 | 24% |
|  |  | E1 | 2229 | 42 | 208 | 54% | 2169 | 20% |