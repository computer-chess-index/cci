# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 1959<sub>(+115) | 2241<sub>(+30) | 2344<sub>(-63) |  |
| 6.1.0 | 2026-09-24 | 1844 | 2211 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 2030<sub>(+98) | 2353<sub>(+39) | 2453<sub>(-3) |  |
| 6.1.0 | 2026-09-24 | 1932 | 2314 | 2456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1932 | 2314 | 2456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-06 05:39:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1844, 1959]
  line "E1: LTC (60.0+0.60s)" [2211, 2241]
  line "E1: VLTC (2m24s+1.12s)" [2407, 2344]
  line "P1: STC (8.0+0.08s)" [1932, 2030]
  line "P1: LTC (60.0+0.60s)" [2314, 2353]
  line "P1: VLTC (2m24s+1.12s)" [2456, 2453]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2453 | 50 | 140 | 53% | 2430 | 24% |
|  |  | E1 | 2344 | 39 | 236 | 50% | 2337 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2353 | 45 | 176 | 53% | 2326 | 18% |
|  |  | E1 | 2241 | 43 | 200 | 50% | 2240 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2030 | 42 | 204 | 47% | 2063 | 21% |
|  |  | E1 | 1959 | 43 | 204 | 50% | 1959 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2456 | 63 | 80 | 50% | 2456 | 30% |
|  |  | E1 | 2407 | 44 | 182 | 49% | 2419 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2314 | 48 | 164 | 55% | 2250 | 18% |
|  |  | E1 | 2211 | 43 | 200 | 52% | 2180 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1932 | 44 | 212 | 59% | 1797 | 18% |
|  |  | E1 | 1844 | 40 | 250 | 55% | 1746 | 17% |