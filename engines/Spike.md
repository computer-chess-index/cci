# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2403<sub>(+59) | 2719<sub>(-16) | 2828<sub>(+2) |  |
| 1.4 | 2011-02-01 | 2344 | 2735 | 2826 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spike+<version>&body=###%20Engine%20name%0ASpike%0A%0A###%20Version%0A1.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:42:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2344, 2403]
  line "STC (8.0+0.08s)" [2344, 2403]
  line "LTC (60.0+0.60s)" [2735, 2719]
  line "" [2826, 2828]
  line "VLTC (2m24s+1.12s)" [2826, 2828]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 37 | 230 | 50% | 2834 | 36% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2719 | 35 | 266 | 51% | 2712 | 29% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2403 | 36 | 252 | 51% | 2391 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 45 | 164 | 51% | 2824 | 32% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2735 | 48 | 144 | 50% | 2734 | 27% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2344 | 32 | 404 | 45% | 2412 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |