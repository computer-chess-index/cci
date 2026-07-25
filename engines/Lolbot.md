# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2082<sub>(+69) | 2390<sub>(+162) | 2421<sub>(+115) |  |
| 0.2.3 | 2025-12-08 | 2013<sub>(+30) | 2228<sub>(-25) | 2306<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1983<sub>(+63) | 2253<sub>(+79) | 2290<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1920<sub>(-69) | 2174<sub>(-27) | 2309<sub>(-52) |  |
| 0.2 | 2025-11-15 | 1989<sub>(+new) | 2201<sub>(+new) | 2361<sub>(+new) |  |
| 0.1-alpha | 2025-03-29 |  |  |  |  |
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

Generated: 2026-07-25 06:26:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1989, 1920, 1983, 2013, 2082]
  line "STC (8.0+0.08s)" [1989, 1920, 1983, 2013, 2082]
  line "LTC (60.0+0.60s)" [2201, 2174, 2253, 2228, 2390]
  line "VLTC (2m24s+1.12s)" [2361, 2309, 2290, 2306, 2421]
  line "VLTC (2m24s+1.12s)" [2361, 2309, 2290, 2306, 2421]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2421 | 27 | 476 | 51% | 2406 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2390 | 27 | 492 | 53% | 2365 | 23% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2082 | 28 | 450 | 49% | 2083 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2306 | 31 | 362 | 48% | 2325 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 31 | 376 | 51% | 2213 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2013 | 28 | 468 | 49% | 2021 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2290 | 53 | 128 | 53% | 2260 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2253 | 66 | 76 | 51% | 2250 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1983 | 59 | 104 | 49% | 1997 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2309 | 55 | 132 | 44% | 2384 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 64 | 88 | 46% | 2213 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1920 | 70 | 76 | 50% | 1920 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2361 | 56 | 116 | 52% | 2341 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2201 | 47 | 160 | 49% | 2214 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1989 | 59 | 100 | 54% | 1948 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |