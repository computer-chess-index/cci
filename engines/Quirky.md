# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 891<sub>(-2068) | 2099<sub>(-1094) | 1207<sub>(-2048) |  |
| 2.1 | 2025-11-25 | 2959 | 3193 | 3255 |  |
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

Generated: 2026-09-09 04:42:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 800 --> 3300
  line "" [2959, 891]
  line "STC (8.0+0.08s)" [2959, 891]
  line "LTC (60.0+0.60s)" [3193, 2099]
  line "" [3255, 1207]
  line "VLTC (2m24s+1.12s)" [3255, 1207]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1207 | 22 | 1640 | 24% | 1689 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2099 | 23 | 920 | 43% | 2199 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 891 | 35 | 456 | 54% | 936 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 22 | 564 | 54% | 3228 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 25 | 438 | 52% | 3174 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2959 | 23 | 552 | 50% | 2940 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |