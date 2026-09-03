# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2398<sub>(+57) | 2715<sub>(-17) | 2826<sub>(+3) |  |
| 1.4 | 2011-02-01 | 2341 | 2732 | 2823 |  |
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

Generated: 2026-09-03 04:39:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2341, 2398]
  line "STC (8.0+0.08s)" [2341, 2398]
  line "LTC (60.0+0.60s)" [2732, 2715]
  line "" [2823, 2826]
  line "VLTC (2m24s+1.12s)" [2823, 2826]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 42 | 174 | 52% | 2811 | 37% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 40 | 212 | 51% | 2711 | 28% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2398 | 37 | 232 | 51% | 2388 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2823 | 45 | 164 | 51% | 2822 | 32% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2732 | 48 | 144 | 50% | 2731 | 27% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2341 | 32 | 404 | 45% | 2410 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |