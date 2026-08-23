# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2086<sub>(+65) | 2402<sub>(+166) | 2431<sub>(+120) |  |
| 0.2.3 | 2025-12-08 | 2021<sub>(+31) | 2236<sub>(-24) | 2311<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1990<sub>(+62) | 2260<sub>(+80) | 2296<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1928<sub>(-67) | 2180<sub>(-27) | 2315<sub>(-52) |  |
| 0.2 | 2025-11-15 | 1995 | 2207 | 2367 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:26:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1995, 1928, 1990, 2021, 2086]
  line "STC (8.0+0.08s)" [1995, 1928, 1990, 2021, 2086]
  line "LTC (60.0+0.60s)" [2207, 2180, 2260, 2236, 2402]
  line "VLTC (2m24s+1.12s)" [2367, 2315, 2296, 2311, 2431]
  line "VLTC (2m24s+1.12s)" [2367, 2315, 2296, 2311, 2431]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2431 | 26 | 508 | 51% | 2411 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2402 | 26 | 526 | 53% | 2373 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2086 | 27 | 496 | 49% | 2080 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2311 | 31 | 362 | 48% | 2330 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2236 | 31 | 376 | 51% | 2219 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2021 | 28 | 468 | 49% | 2028 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 53 | 128 | 53% | 2267 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2260 | 66 | 76 | 51% | 2257 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1990 | 59 | 104 | 49% | 2003 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2315 | 55 | 132 | 44% | 2391 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 64 | 88 | 46% | 2219 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1928 | 70 | 76 | 50% | 1928 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2367 | 56 | 116 | 52% | 2346 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2207 | 47 | 160 | 49% | 2221 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1995 | 59 | 100 | 54% | 1956 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |