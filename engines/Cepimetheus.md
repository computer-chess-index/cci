# Engine: Cepimetheus

Author: George Bland

Home: https://github.com/mrgwbland/Cepimetheus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0.0 | 2026-07-23 | 2064<sub>(+98) | 2346<sub>(+163) | 2442<sub>(+97) |  |
| 12.0.0 | 2026-07-19 | 1966<sub>(+new) | 2183<sub>(+new) | 2345<sub>(+new) |  |
| 11.0.0 | 2026-07-08 |  |  |  |  |
| 10.0.0 | 2026-07-01 |  |  |  |  |
| 9.0.0 | 2026-06-24 |  |  |  |  |
| 8.0.1 | 2026-06-20 |  |  |  |  |
| 8.0.0 | 2026-06-18 |  |  |  |  |
| 7.2.0 | 2026-06-16 |  |  |  |  |
| 7.1.0 | 2026-06-12 |  |  |  |  |
| 7.0.0 | 2026-06-02 |  |  |  |  |
| 6.4.1 | 2026-05-28 |  |  |  |  |
| 6.4.0 | 2026-05-27 |  |  |  |  |
| 6.3.0 | 2026-05-24 |  |  |  |  |
| 6.2.0 | 2026-05-24 |  |  |  |  |
| 6.1.0 | 2026-05-21 |  |  |  |  |
| 6.0.1 | 2026-05-21 |  |  |  |  |
| 6.0.0 | 2026-05-21 |  |  |  |  |
| 5.1.0 | 2026-05-20 |  |  |  |  |
| 5.0.0 | 2026-05-16 |  |  |  |  |
| 4.3.1 | 2026-05-15 |  |  |  |  |
| 4.3.0 | 2026-05-13 |  |  |  |  |
| 4.2.1 | 2026-05-09 |  |  |  |  |
| 4.2.0 | 2026-05-08 |  |  |  |  |
| 4.1.0 | 2026-05-06 |  |  |  |  |
| 4.0.0 | 2026-05-06 |  |  |  |  |
| 3.2.1 | 2026-04-26 |  |  |  |  |
| 3.2.0 | 2026-04-26 |  |  |  |  |
| 3.1.0 | 2026-04-26 |  |  |  |  |
| 3.0.0 | 2026-04-24 |  |  |  |  |
| 2.2.0 | 2026-04-23 |  |  |  |  |
| 2.1.0 | 2026-04-15 |  |  |  |  |
| 2.0.0 | 2026-04-14 |  |  |  |  |
| 1.1.0 | 2026-04-13 |  |  |  |  |
| 1.0.0 | 2026-04-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cepimetheus+<version>&body=###%20Engine%20name%0ACepimetheus%0A%0A###%20Version%0A13.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-29 06:23:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["12.0.0", "13.0.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1966, 2064]
  line "STC (8.0+0.08s)" [1966, 2064]
  line "LTC (60.0+0.60s)" [2183, 2346]
  line "VLTC (2m24s+1.12s)" [2345, 2442]
  line "VLTC (2m24s+1.12s)" [2345, 2442]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2442 | 37 | 248 | 48% | 2460 | 26% |
| 13.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2346 | 43 | 188 | 49% | 2350 | 23% |
| 13.0.0 | STC <sub>(8.0+0.08s)</sub> | 2064 | 40 | 220 | 53% | 2036 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2345 | 40 | 216 | 51% | 2331 | 26% |
| 12.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2183 | 37 | 256 | 48% | 2190 | 25% |
| 12.0.0 | STC <sub>(8.0+0.08s)</sub> | 1966 | 44 | 186 | 52% | 1944 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |