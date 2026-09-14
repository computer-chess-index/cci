# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 886<sub>(-2075) | 2101<sub>(-1093) | 1212<sub>(-2044) |  |
| 2.1 | 2025-11-25 | 2961 | 3194 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:41:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 800 --> 3300
  line "" [2961, 886]
  line "STC (8.0+0.08s)" [2961, 886]
  line "LTC (60.0+0.60s)" [3194, 2101]
  line "" [3256, 1212]
  line "VLTC (2m24s+1.12s)" [3256, 1212]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1212 | 21 | 1648 | 24% | 1686 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2101 | 23 | 924 | 43% | 2199 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 886 | 35 | 460 | 54% | 936 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 22 | 564 | 54% | 3228 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 25 | 438 | 52% | 3175 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2961 | 23 | 552 | 50% | 2942 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |