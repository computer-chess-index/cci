# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2781 | 3092 | 3177 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 3017 | 3254 | 3356 |  |
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

Generated: 2026-10-13 04:41:12

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "T1: STC (8.0+0.08s)" [2635, 2897]
  line "T1: LTC (60.0+0.60s)" [2942, 3166]
  line "T1: VLTC (2m24s+1.12s)" [3029, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 31 | 300 | 49% | 3187 | 52% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 28 | 342 | 50% | 3235 | 58% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3356 | 36 | 214 | 49% | 3363 | 57% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3092 | 32 | 284 | 48% | 3109 | 49% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 29 | 346 | 50% | 3164 | 51% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 36 | 224 | 46% | 3287 | 49% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 29 | 370 | 49% | 2904 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3017 | 37 | 220 | 52% | 3001 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2781 | 30 | 338 | 46% | 2820 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3029 | 32 | 296 | 48% | 3044 | 40% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 34 | 264 | 46% | 2973 | 41% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2635 | 34 | 276 | 50% | 2641 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |