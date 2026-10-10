# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2769 | 3087 | 3163 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 3043 | 3297 | 3399 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2897<sub>(+262) | 3166<sub>(+224) | 3233<sub>(+204) |  |
| 1.6 | 2026-06-13 | 2635 | 2942 | 3029 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:40:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2635, 2897]
  line "STC (8.0+0.08s)" [2635, 2897]
  line "LTC (60.0+0.60s)" [2942, 3166]
  line "" [3029, 3233]
  line "VLTC (2m24s+1.12s)" [3029, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 33 | 260 | 49% | 3174 | 53% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 28 | 342 | 50% | 3235 | 58% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 37 | 198 | 48% | 3411 | 57% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3087 | 33 | 268 | 49% | 3097 | 49% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 29 | 346 | 50% | 3164 | 51% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3297 | 36 | 220 | 45% | 3333 | 50% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 29 | 370 | 49% | 2904 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3043 | 43 | 170 | 49% | 3048 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2769 | 31 | 330 | 45% | 2812 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3029 | 32 | 296 | 48% | 3044 | 40% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 34 | 264 | 46% | 2973 | 41% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2635 | 34 | 276 | 50% | 2641 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |