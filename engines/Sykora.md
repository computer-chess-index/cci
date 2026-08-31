# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2938<sub>(+226) | 3271<sub>(+169) | 3367<sub>(+182) |  |
| 3.1 | 2026-07-15 | 2712<sub>(+374) | 3102<sub>(+100) | 3185<sub>(+133) |  |
| 3.0 | 2026-07-12 | 2338<sub>(+new) | 3002<sub>(+new) | 3052<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2003<sub>(+116) | 2358<sub>(+132) | 2442<sub>(+25) |  |
| 0.1.0 | 2026-02-17 | 1887 | 2226 | 2417 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:39:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "" [1887, 2003, 2338, 2712, 2938]
  line "STC (8.0+0.08s)" [1887, 2003, 2338, 2712, 2938]
  line "LTC (60.0+0.60s)" [2226, 2358, 3002, 3102, 3271]
  line "" [2417, 2442, 3052, 3185, 3367]
  line "VLTC (2m24s+1.12s)" [2417, 2442, 3052, 3185, 3367]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 31 | 250 | 49% | 3375 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3271 | 35 | 200 | 54% | 3247 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2938 | 36 | 196 | 55% | 2897 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 44 | 132 | 50% | 3181 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3102 | 44 | 132 | 52% | 3093 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2712 | 46 | 126 | 51% | 2699 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 48 | 124 | 56% | 2988 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 56 | 96 | 54% | 2955 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2338 | 34 | 240 | 65% | 2228 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2442 | 36 | 254 | 53% | 2418 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2358 | 33 | 304 | 50% | 2354 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2003 | 34 | 306 | 51% | 1993 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2417 | 126 | 28 | 21% | 2720 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2226 | 70 | 70 | 46% | 2259 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1887 | 97 | 40 | 41% | 2009 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |