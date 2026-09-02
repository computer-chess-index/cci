# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2541<sub>(+320) | 2935<sub>(+443) | 3020<sub>(+458) |  |
| 2.5 | 2021-09-20 | 2221 | 2492 | 2562 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zevra+<version>&body=###%20Engine%20name%0AZevra%0A%0A###%20Version%0A2.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-02 04:41:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2200 --> 3100
  line "" [2221, 2541]
  line "STC (8.0+0.08s)" [2221, 2541]
  line "LTC (60.0+0.60s)" [2492, 2935]
  line "" [2562, 3020]
  line "VLTC (2m24s+1.12s)" [2562, 3020]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3020 | 40 | 176 | 51% | 3009 | 57% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 44 | 160 | 56% | 2882 | 42% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2541 | 47 | 144 | 52% | 2525 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2562 | 33 | 316 | 52% | 2519 | 29% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2492 | 14 | 1812 | 51% | 2481 | 27% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 2221 | 14 | 1898 | 51% | 2209 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |