# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2248<sub>(+20) | 2704<sub>(+71) | 2824<sub>(+58) |  |
| 5.1 | 2026-08-21 | 2228 | 2633 | 2766 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2253<sub>(-3) | 2726<sub>(+104) | 2795<sub>(+119) |  |
| 5.1 | 2026-08-21 | 2256 | 2622 | 2676 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2314<sub>(+70) | 2651<sub>(+137) | 2747<sub>(+100) |  |
| 5.0 | 2026-08-08 | 2244 | 2514 | 2647 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:37:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2228, 2248]
  line "E1: LTC (60.0+0.60s)" [2633, 2704]
  line "E1: VLTC (2m24s+1.12s)" [2766, 2824]
  line "P1: STC (8.0+0.08s)" [2256, 2253]
  line "P1: LTC (60.0+0.60s)" [2622, 2726]
  line "P1: VLTC (2m24s+1.12s)" [2676, 2795]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "T1: STC (8.0+0.08s)" [2244, 2314]
  line "T1: LTC (60.0+0.60s)" [2514, 2651]
  line "T1: VLTC (2m24s+1.12s)" [2647, 2747]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2824 | 30 | 364 | 49% | 2812 | 35% |
|  |  | P1 | 2795 | 40 | 190 | 51% | 2795 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2704 | 30 | 364 | 49% | 2716 | 33% |
|  |  | P1 | 2726 | 38 | 228 | 48% | 2753 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2253 | 41 | 188 | 51% | 2241 | 34% |
|  |  | E1 | 2248 | 33 | 310 | 50% | 2241 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2747 | 31 | 322 | 51% | 2736 | 37% |
|  |  | P1 | 2676 | 35 | 278 | 48% | 2703 | 32% |
|  |  | E1 | 2766 | 29 | 404 | 47% | 2803 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2651 | 31 | 338 | 52% | 2631 | 30% |
|  |  | P1 | 2622 | 35 | 280 | 44% | 2678 | 27% |
|  |  | E1 | 2633 | 31 | 342 | 46% | 2669 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2314 | 37 | 236 | 50% | 2310 | 34% |
|  |  | P1 | 2256 | 37 | 250 | 48% | 2282 | 25% |
|  |  | E1 | 2228 | 34 | 292 | 48% | 2234 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2647 | 34 | 298 | 48% | 2668 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2514 | 37 | 246 | 50% | 2480 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2244 | 32 | 336 | 50% | 2229 | 28% |