# Engine: Atenika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-09-13 | 2668<sub>(+628) | 3012<sub>(+694) | 3078<sub>(+728) |  |
| 0.5.0 | 2026-09-02 | 2040<sub>(+142) | 2318<sub>(+188) | 2350<sub>(+125) |  |
| 0.4.0 | 2026-08-30 | 1898 | 2130 | 2225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Atenika+<version>&body=###%20Engine%20name%0AAtenika%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:36:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.5.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 3100
  line "" [1898, 2040, 2668]
  line "STC (8.0+0.08s)" [1898, 2040, 2668]
  line "LTC (60.0+0.60s)" [2130, 2318, 3012]
  line "" [2225, 2350, 3078]
  line "VLTC (2m24s+1.12s)" [2225, 2350, 3078]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 42 | 176 | 57% | 3011 | 44% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 42 | 166 | 55% | 2961 | 49% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2668 | 62 | 90 | 53% | 2619 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2350 | 36 | 262 | 50% | 2353 | 26% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2318 | 42 | 202 | 52% | 2299 | 21% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 2040 | 36 | 270 | 49% | 2057 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 38 | 248 | 48% | 2246 | 23% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2130 | 40 | 230 | 50% | 2134 | 15% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 38 | 248 | 50% | 1897 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |