# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2669<sub>(+85) | 3085<sub>(+128) | 3136<sub>(+78) |  |
| 2.2.0 | 2026-04-03 | 2584<sub>(-16) | 2957<sub>(+32) | 3058<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2600<sub>(+5) | 2925<sub>(-29) | 2921<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2595<sub>(+273) | 2954<sub>(+182) | 2989<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2322 | 2772 | 2881 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:23:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2322, 2595, 2600, 2584, 2669]
  line "STC (8.0+0.08s)" [2322, 2595, 2600, 2584, 2669]
  line "LTC (60.0+0.60s)" [2772, 2954, 2925, 2957, 3085]
  line "VLTC (2m24s+1.12s)" [2881, 2989, 2921, 3058, 3136]
  line "VLTC (2m24s+1.12s)" [2881, 2989, 2921, 3058, 3136]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3136 | 38 | 202 | 48% | 3154 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3085 | 43 | 150 | 51% | 3081 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2669 | 50 | 128 | 50% | 2670 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 34 | 242 | 51% | 3052 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2957 | 35 | 238 | 50% | 2951 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 34 | 274 | 50% | 2583 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 31 | 292 | 49% | 2932 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2925 | 34 | 248 | 49% | 2930 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2600 | 35 | 256 | 48% | 2614 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2989 | 31 | 288 | 49% | 2994 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2954 | 32 | 280 | 51% | 2946 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2595 | 30 | 336 | 48% | 2611 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2881 | 32 | 302 | 49% | 2890 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 34 | 268 | 48% | 2789 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2322 | 35 | 272 | 46% | 2358 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |