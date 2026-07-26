# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-15 | 2705<sub>(+376) | 3098<sub>(+104) | 3171<sub>(+125) |  |
| 3.0 | 2026-07-12 | 2329<sub>(+new) | 2994<sub>(+new) | 3046<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1993<sub>(+114) | 2352<sub>(+135) | 2434<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1879 | 2217 | 2410 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-26 06:29:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1"]
  y-axis "Elo Rating" 1800 --> 3200
  line "STC (8.0+0.08s)" [1879, 1993, 2329, 2705]
  line "STC (8.0+0.08s)" [1879, 1993, 2329, 2705]
  line "LTC (60.0+0.60s)" [2217, 2352, 2994, 3098]
  line "VLTC (2m24s+1.12s)" [2410, 2434, 3046, 3171]
  line "VLTC (2m24s+1.12s)" [2410, 2434, 3046, 3171]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 46 | 120 | 50% | 3173 | 71% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3098 | 48 | 112 | 52% | 3083 | 65% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2705 | 49 | 114 | 51% | 2691 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3046 | 48 | 124 | 56% | 2981 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 56 | 96 | 54% | 2947 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2329 | 34 | 240 | 65% | 2218 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 36 | 254 | 53% | 2408 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2352 | 33 | 304 | 50% | 2346 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1993 | 34 | 306 | 51% | 1982 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2410 | 126 | 28 | 21% | 2714 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 70 | 70 | 46% | 2249 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1879 | 97 | 40 | 41% | 2001 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |