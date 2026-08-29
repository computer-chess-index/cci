# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2361<sub>(+21) | 2709<sub>(-23) | 2820<sub>(-2) |  |
| 1.4 | 2011-02-01 | 2340 | 2732 | 2822 |  |
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

Generated: 2026-08-29 06:29:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2340, 2361]
  line "STC (8.0+0.08s)" [2340, 2361]
  line "LTC (60.0+0.60s)" [2732, 2709]
  line "" [2822, 2820]
  line "VLTC (2m24s+1.12s)" [2822, 2820]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 65 | 70 | 54% | 2789 | 41% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 58 | 96 | 53% | 2684 | 29% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2361 | 65 | 80 | 51% | 2356 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 45 | 164 | 51% | 2820 | 32% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2732 | 48 | 144 | 50% | 2730 | 27% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2340 | 32 | 404 | 45% | 2410 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |