# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2850<sub>(+235) | 3087<sub>(+178) | 3125<sub>(+119) |  |
| 9 | 2026-01-10 | 2615<sub>(+16) | 2909<sub>(-14) | 3006<sub>(-34) |  |
| 8 | 2025-09-25 | 2599 | 2923 | 3040 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:39:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2599, 2615, 2850]
  line "STC (8.0+0.08s)" [2599, 2615, 2850]
  line "LTC (60.0+0.60s)" [2923, 2909, 3087]
  line "" [3040, 3006, 3125]
  line "VLTC (2m24s+1.12s)" [3040, 3006, 3125]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3125 | 24 | 508 | 50% | 3120 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3087 | 23 | 536 | 51% | 3069 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2850 | 20 | 784 | 46% | 2873 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3006 | 36 | 216 | 51% | 2996 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 40 | 182 | 48% | 2927 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2615 | 49 | 128 | 50% | 2618 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3040 | 38 | 198 | 51% | 3031 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2923 | 37 | 208 | 52% | 2904 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2599 | 43 | 176 | 51% | 2588 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |