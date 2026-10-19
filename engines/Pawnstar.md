# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-10-15 | 2842<sub>(+126) | 3146<sub>(+72) | 3167<sub>(-6) |  |
| 0.13.593 | 2026-06-30 | 2716 | 3074 | 3173 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-10-15 | 2923<sub>(+72) | 3241<sub>(-17) | 3330<sub>(+59) |  |
| 0.13.593 | 2026-06-30 | 2851 | 3258 | 3271 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:41:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2716, 2842]
  line "E1: LTC (60.0+0.60s)" [3074, 3146]
  line "E1: VLTC (2m24s+1.12s)" [3173, 3167]
  line "P1: STC (8.0+0.08s)" [2851, 2923]
  line "P1: LTC (60.0+0.60s)" [3258, 3241]
  line "P1: VLTC (2m24s+1.12s)" [3271, 3330]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3330 | 45 | 128 | 49% | 3340 | 66% |
|  |  | E1 | 3167 | 37 | 188 | 48% | 3181 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3241 | 45 | 128 | 50% | 3237 | 62% |
|  |  | E1 | 3146 | 38 | 192 | 51% | 3137 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2923 | 46 | 138 | 53% | 2894 | 44% |
|  |  | E1 | 2842 | 39 | 200 | 50% | 2846 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3271 | 35 | 220 | 46% | 3301 | 56% |
|  |  | E1 | 3173 | 30 | 312 | 47% | 3194 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3258 | 34 | 248 | 52% | 3239 | 49% |
|  |  | E1 | 3074 | 31 | 300 | 48% | 3093 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2851 | 41 | 192 | 46% | 2889 | 35% |
|  |  | E1 | 2716 | 30 | 382 | 46% | 2754 | 31% |