# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2930<sub>(+222) | 3263<sub>(+165) | 3357<sub>(+178) |  |
| 3.1 | 2026-07-15 | 2708<sub>(+374) | 3098<sub>(+100) | 3179<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2334<sub>(+new) | 2998<sub>(+new) | 3048<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1998<sub>(+113) | 2354<sub>(+132) | 2437<sub>(+23) |  |
| 0.1.0 | 2026-02-17 | 1885 | 2222 | 2414 |  |
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

Generated: 2026-08-21 06:31:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "STC (8.0+0.08s)" [1885, 1998, 2334, 2708, 2930]
  line "STC (8.0+0.08s)" [1885, 1998, 2334, 2708, 2930]
  line "LTC (60.0+0.60s)" [2222, 2354, 2998, 3098, 3263]
  line "VLTC (2m24s+1.12s)" [2414, 2437, 3048, 3179, 3357]
  line "VLTC (2m24s+1.12s)" [2414, 2437, 3048, 3179, 3357]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3357 | 32 | 234 | 48% | 3371 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3263 | 37 | 180 | 54% | 3239 | 74% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2930 | 37 | 184 | 55% | 2890 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 44 | 132 | 50% | 3177 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3098 | 44 | 132 | 52% | 3087 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2708 | 46 | 126 | 51% | 2695 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 48 | 124 | 56% | 2984 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 56 | 96 | 54% | 2950 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 34 | 240 | 65% | 2222 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 36 | 254 | 53% | 2412 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2354 | 33 | 304 | 50% | 2350 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1998 | 34 | 306 | 51% | 1987 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2414 | 126 | 28 | 21% | 2716 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2222 | 70 | 70 | 46% | 2255 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1885 | 97 | 40 | 41% | 2005 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |